import React from "react";
import { pages, Person } from "./personData";
import Image from "next/image";

interface PersonDetailsProps {
  personId: string; // The ID to match the person
}

const PersonDetails: React.FC<PersonDetailsProps> = ({ personId }) => {
  const personData: Person | undefined = pages.find(
    (p) => p.person === personId
  );

  if (!personData) {
    return <p>Person not found</p>;
  }
  return (
    <div className="bg-white p-8 rounded-lg shadow-md overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">
        {personData.person}&apos;s Story
      </h1>
      <Image
        src={personData.image}
        alt={personData.person}
        className="w-72 h-auto rounded-lg mb-4"
        height={0}
        width={0}
      />

      {/* Check if bio is a string or an object */}
      {typeof personData.bio === "string" ? (
        <p className="text-lg">{personData.bio}</p>
      ) : (
        <div>
          <p className="text-lg mb-4">{personData.bio.summary}</p>
          {personData.bio.sections.map((section, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="text-lg">{section.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PersonDetails;
