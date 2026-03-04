"use client";
import React from "react";

export default function Resume({id}) {
  return (
    <>
    <section id={id}>
    <section className="bg-[#0F0F0F] text-white min-h-screen p-10 max-sm:w-[95%]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Page Header */}
        <div className="text-5xl font-serif text-center mb-5 max-sm:text-5xl">My Resume & Certifications</div>
        <div className="text-gray-400 font-serif text-center text-lg mb-10">
          Overview of my experience, education, certifications, and languages.
        </div>

        {/* Resume Boxes */}
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8">
          
          {/* Certifications */}
          <div className="bg-[#1C1C1C] p-6 rounded-2xl shadow-md">
            <div className="text-2xl font-serif mb-3">Certifications</div>
            <ul className="list-disc list-inside text-gray-400 font-serif space-y-2">
              <li>CodeGirls Pakistan Frontend Development Program </li>
              <li>Aspire Institute : Aspire Leaders Program</li>
              <li>Cisco Networking Academy : Internet Of Thinking </li>
               <li>Cisco Networking Academy : Introduction to Python Programming </li>

            </ul>
          </div>
      

          {/* Education */}
          <div className="bg-[#1C1C1C] p-6 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-3">
              <span className="text-2xl font-serif">Education</span>
              <span className="text-gray-400 text-sm font-serif max-sm:hidden">Sept 12, 2022 - Present</span>
            </div>
            <ul className="list-disc list-inside text-gray-400 font-serif space-y-2">
              <li>BE Software Engineering, Mohammad Ali Jinnah University, Karachi</li>
            </ul>
          </div>

              {/* Experience */}
          <div className="bg-[#1C1C1C] p-6 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-3">
              <span className="text-2xl font-serif">Experience</span>
              <span className="text-gray-400 text-sm font-serif max-sm:hidden">May 17, 2024 - May 17, 2025</span>
            </div>
            <ul className="list-disc list-inside text-gray-400 font-serif space-y-2">
              <li>NEXTGEN LEARNERS ( Internship in Deep Learning )</li>
              <li>Worked On AI/DeepLearnig projects</li>
            </ul>
          </div>



          {/* Languages */}
          <div className="bg-[#1C1C1C] p-6 rounded-2xl shadow-md">
            <div className="text-2xl font-serif mb-3">RELEVANT COURSE WORK</div>
            <ul className="list-disc list-inside text-gray-400 font-serif space-y-2">
              <li>Software Quality Engineering </li>
              <li> Web Engineering</li>
              <li>Internet of Things</li>
              <li>Operating Systems</li>
              <li>Data Communication and Networks</li>
              <li>Software Architecture</li>
              <li> Database Management System</li>
              <li>Project Management</li>
              <li>Object Oriented Programming </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </section>
    </>
  );
}
    