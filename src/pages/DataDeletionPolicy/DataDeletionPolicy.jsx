import { useEffect } from "react";

export default function DataDeletionPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Data Deletion Policy</h1>
        <p className="mb-4">
          At StrikeX Gaming, we are committed to respecting your privacy and
          providing you with control over your personal data. This Data Deletion
          Policy outlines how we handle the deletion of user data and the
          procedures we follow to ensure your data is securely removed from our
          systems when requested.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          User Data Deletion Requests:
        </h2>
        <p className="mb-4 ml-6">
          1. <strong>User Initiated Deletion Requests:</strong> Users have the
          right to request the deletion of their personal data from our systems.
          To initiate a deletion request, users can contact us through our
          designated channels, such as email or the contact form on our website.
        </p>
        <p className="mb-4 ml-6">
          2. <strong>Verification Process:</strong> To protect the security of
          our users’ data, we may require verification of identity before
          processing a deletion request. This may involve requesting additional
          information to confirm the identity of the individual making the
          request.
        </p>
        <p className="mb-4 ml-6">
          3. <strong>Processing Deletion Requests:</strong> Upon receiving a
          verified deletion request, we will promptly review the request and
          proceed with the deletion of the user’s data from our systems.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Data Deletion Procedures:
        </h2>
        <p className="mb-4 ml-6">
          1. <strong>Removal of Identifiable Information:</strong> We will
          permanently delete all identifiable information associated with the
          user, including but not limited to name, email address, contact
          details, and any other personal data stored in our databases.
        </p>
        <p className="mb-4 ml-6">
          2. <strong>Erasure of User Content:</strong> Any user-generated
          content, such as profile information, images, or comments, will be
          permanently removed from our servers.
        </p>
        <p className="mb-4 ml-6">
          3. <strong>Backup Data Removal:</strong> We will ensure that the
          user’s data is removed from all backups and archival systems within a
          reasonable timeframe, in accordance with our backup retention
          policies.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Confirmation of Data Deletion:
        </h2>
        <p className="mb-4 ml-6">
          1. <strong>Notification to the User:</strong> Once the deletion
          process is completed, we will notify the user via email or other
          contact methods provided, confirming that their data has been
          successfully deleted from our systems.
        </p>
        <p className="mb-4 ml-6">
          2. <strong>No Restoration of Data:</strong> Deleted data cannot be
          recovered once the deletion process is completed. Users should be
          aware that this action is irreversible.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Exceptions:</h2>
        <p className="mb-4 ml-6">
          1. <strong>Legal Obligations:</strong> We may retain certain user data
          if required to do so by law or to comply with legal obligations, such
          as responding to legal requests or resolving disputes.
        </p>
        <p className="mb-4 ml-6">
          2. <strong>Anonymized Data:</strong> Aggregated or anonymized data
          that does not identify individual users may be retained for analytical
          or statistical purposes.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us:</h2>
        <p className="mb-4 ml-6">
          If you have any questions, concerns, or wish to initiate a data
          deletion request, please contact us at{" "}
          <a
            href="mailto:admin@strikexgaming.com"
            className="text-blue-500 hover:underline"
          >
            admin@strikexgaming.com
          </a>
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Effective Date: March 11, 2024
        </h2>
        <p className="mb-4 ml-6">
          By adhering to this Data Deletion Policy, StrikeX Gaming aims to
          ensure transparency and accountability in managing user data and
          respecting user privacy rights.
        </p>
      </div>
    </div>
  );
}
