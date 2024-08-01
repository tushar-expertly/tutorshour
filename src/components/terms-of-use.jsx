import React from "react";
import Layout from "./layout";

function TermsOfUse() {
  return (
    <Layout>
      <div className="bg-blue-200 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
          {/* <p className="font-semibold mb-2">Legal</p> */}
          <p className="font-semibold mb-2">Copyright Issues</p>
          <p className="mb-4">
            Materials on the Tutorshour website may be subject to copyright
            protection under U.S. and foreign laws. Reproduction or transmission
            beyond fair use requires written consent from the copyright owners.
          </p>
          <p className="font-semibold mb-2">Disclaimers</p>
          <p className="mb-4">
            Information on this website is provided for convenience. Tutorshour
            makes efforts to ensure accuracy but cannot guarantee the
            reliability of third-party information. Tutorshour is not liable for
            actions taken based on this information or for any resulting
            consequences.
          </p>
          <p className="mb-4">External Links</p>
          <p className="mb-4">
            The Tutorshour web portal may include links to external websites
            managed by other entities. These links are provided to offer
            valuable information to visitors. The presence of a link does not
            imply endorsement by Tutorshour. Links may be removed or updated at
            any time without notice.ofess. Links may be removed or updated at
            any time without notice.
          </p>
          {/* <p className="font-semibold mb-2">External Links</p> */}
          <p className="mb-4">
            For concerns about linked external websites, please contact the
            respective organizations. Tutorshour is not responsible for external
            site content.
          </p>
          {/* <p className="mb-4">
            Additionally, links may be provided for informational purposes where
            the linked external website offers useful information or is required
            or authorized by law. Gradeage reserves the right to determine
            whether the external website aligns with the purpose of this web
            portal or serves the specified informational needs.
          </p>
          <p className="mb-4">
            Please note that inclusion of a hypertext link to an external
            website does not constitute an endorsement of any product, service,
            or organization referenced therein, nor does it imply agreement with
            any views expressed on the linked website. Hypertext links to
            external websites and pages may be removed or replaced at the
            discretion of Gradeage, without prior notice.
          </p>
          <p className="mb-4">
            If you encounter any issues regarding the format, accuracy,
            timeliness, or completeness of a linked external website, please
            contact the organization responsible for that website. Gradeage does
            not exercise control over, nor assume responsibility for, the
            content of linked external websites or pages.
          </p> */}
        </div>
      </div>
    </Layout>
  );
}

export default TermsOfUse;
