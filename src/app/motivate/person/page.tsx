"use client";
import MotivationHeader from "../../../components/motivate/MotivationHeader";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Person {
  display_name: string;
  url: string;
  public_id: string;
  image: string;
  quote: string;
  bio: {
    summary: string;
    sections: { type: string; content: string | string[] }[];
  };
}

const PersonComponent: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getPeople"); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPeople(data.data);
        setSelectedPerson(data.data[0]); // Set the first person as default
      } catch (error) {
        // Handle the error safely
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedPerson(people[page - 1]); // Update the selected person based on the page
  };

  // Render bio section
  const renderBioSection = (section: {
    type: string;
    content: string | string[];
  }) => {
    switch (section.type) {
      case "heading":
        return (
          <h3 className="text-xl font-semibold mt-4">{section.content}</h3>
        );
      case "paragraph":
        return <p className="mt-2 text-gray-700">{section.content}</p>;
      case "list":
        return (
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {(section.content as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  // Sliding window pagination logic
  const getPaginationWindow = () => {
    const totalPages = people.length;
    const windowSize = 3; // Number of pagination buttons to show at a time
    let startPage = Math.max(1, currentPage - Math.floor(windowSize / 2));
    let endPage = startPage + windowSize - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - windowSize + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-600 py-16">
      {/* Fixed header */}
      <div className="fixed top-0 z-10 shadow-lg w-full">
        <MotivationHeader />
      </div>

      {/* Left Side: Person Information */}
      <div className="pt-24 grid grid-cols-1 md:grid-cols-2 gap-6 p-8 h-[calc(100vh-80px)]">
        <div className="bg-white p-12 rounded-lg shadow-md overflow-y-auto ">
          {selectedPerson && (
            <>
              <div className="flex items-center space-x-6">
                <Image
                  src={selectedPerson.image}
                  alt={selectedPerson.display_name}
                  width={150}
                  height={150}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-2xl font-semibold">
                    {selectedPerson.display_name}
                  </h2>
                  <p className="text-gray-600 italic">{selectedPerson.quote}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{selectedPerson.bio.summary}</p>
              {selectedPerson.bio.sections.map((section, index) => (
                <div key={index}>{renderBioSection(section)}</div>
              ))}
            </>
          )}
        </div>

        {/* Right Side: Video and Pagination */}
        <div className="w-full  bg-gray-300 p-6 rounded-lg shadow-md overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Interview Videos</h1>
          {selectedPerson && (
            <>
              <div className=" w-full rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold">
                  {selectedPerson.display_name}
                </h2>

                <video
                  controls
                  src={selectedPerson.url}
                  title={selectedPerson.display_name}
                  className="w-full h-96 rounded-lg p-4"
                ></video>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        {getPaginationWindow().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded-lg`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === people.length}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonComponent;
