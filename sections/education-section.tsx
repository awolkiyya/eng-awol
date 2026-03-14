import Section from "@/components/section";
import Image from "next/image";

export default function EducationSection() {
  return (
    <Section title="Education & Certifications">
      <div className="space-y-4">

        {/* University Education */}
        <div className="w-full border border-gray-200 p-6 rounded-xl">
          <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between text-gray-500">

            <div className="flex items-center gap-3">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/f/fe/Current_Logo_of_Jimma_University.png"
                  alt="Education"
                  width={25}
                  height={25}
                  className="size-5.5"
                />
              </div>

              <div>
                <h3 className="text-base font-medium text-gray-800">
                  Bachelor of Science in Software Engineering
                </h3>
                <div className="text-sm">
                  Jimma University
                </div>
              </div>
            </div>

            <div className="text-sm">2018 – 2022</div>
          </div>

          <p className="mt-6 text-gray-500">
            Focused on software engineering principles including system design,
            algorithms, database systems, and full-stack web and mobile
            application development.
          </p>
        </div>

        {/* AWS Certification */}
        <div className="w-full border border-gray-200 p-6 rounded-xl">
          <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between text-gray-500">

            <div className="flex items-center gap-3">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <Image
                  src="https://www.inovex.de/wp-content/uploads/Amazon_Web_Services_Logo-kl.png"
                  alt="AWS"
                  width={25}
                  height={25}
                  className="size-5.5"
                />
              </div>

              <div>
                <h3 className="text-base font-medium text-gray-800">
                  AWS Cloud Certification / Training
                </h3>
                <div className="text-sm">
                  Amazon Web Services (Cloud Computing)
                </div>
              </div>
            </div>

            <div className="text-sm">2023</div>
          </div>

          <p className="mt-6 text-gray-500">
            Hands-on experience with cloud infrastructure including EC2,
            S3, IAM, cloud deployment, CI/CD pipelines, and scalable backend
            architectures using AWS services.
          </p>
        </div>

      </div>
    </Section>
  );
}