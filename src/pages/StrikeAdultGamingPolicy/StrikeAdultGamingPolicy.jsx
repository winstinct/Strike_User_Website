import { useEffect } from "react";

export default function StrikeAdultGamingPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Strike Adult Gaming Policy</h1>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Introduction:</h2>
        <p className="mb-4">
          Strike is committed to providing an enjoyable and responsible gaming
          experience for adults. This policy outlines guidelines and procedures
          to ensure compliance with legal regulations and promote responsible
          gaming practices.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Age Restriction:</h2>
        <p className="mb-4">
          1. Strike is intended for individuals aged 18 years and older. Users
          must verify their age upon registration using a valid identification
          document.
        </p>
        <p className="mb-4">
          2. Users under the age of 18 are strictly prohibited from
          participating in any gaming activities on Strike.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Responsible Gaming:
        </h2>
        <p className="mb-4">
          1. Strike promotes responsible gaming practices and encourages users
          to play responsibly.
        </p>
        <p className="mb-4">
          2. Users have the option to set deposit limits, session limits, and
          self-exclusion periods to manage their gaming activity.
        </p>
        <p className="mb-4">
          3. Strike provides access to resources for users seeking assistance
          with problem gambling, including helplines and support organizations.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Fair Play and Security:
        </h2>
        <p className="mb-4">
          1. Strike ensures fairness and transparency in all gaming activities,
          employing certified random number generators (RNGs) to determine
          outcomes.
        </p>
        <p className="mb-4">
          2. Measures are in place to prevent fraud, cheating, and money
          laundering activities, including robust identity verification
          procedures and transaction monitoring.
        </p>
        <p className="mb-4">
          3. Any suspicious or fraudulent activity is promptly investigated, and
          appropriate action is taken, including account suspension or
          termination.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Privacy and Data Protection:
        </h2>
        <p className="mb-4">
          1. Strike prioritizes the protection of user data and complies with
          applicable data protection laws and regulations.
        </p>
        <p className="mb-4">
          2. Personal information collected from users is securely stored and
          used solely for the purpose of providing gaming services, as outlined
          in the privacy policy.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Compliance:</h2>
        <p className="mb-4">
          1. Strike adheres to all relevant gaming laws, regulations, and
          licensing requirements in jurisdictions where it operates.
        </p>
        <p className="mb-4">
          2. Regular audits and assessments are conducted to ensure ongoing
          compliance with regulatory standards.
        </p>
        <p className="mb-4">
          3. Strike cooperates with regulatory authorities and law enforcement
          agencies to combat illegal gaming activities and uphold the integrity
          of the platform.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Policy Enforcement:
        </h2>
        <p className="mb-4">
          1. Users found to be in violation of this policy or engaging in
          prohibited activities may face account suspension, termination, or
          legal action.
        </p>
        <p className="mb-4">
          2. Strike reserves the right to update or modify this policy at any
          time to reflect changes in regulations or industry standards.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Contact Information:
        </h2>
        <p className="mb-4">
          For inquiries or assistance regarding this policy, please contact
          [Contact Email/Phone Number].
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Acknowledgment:</h2>
        <p className="mb-4">
          By using Strike, users acknowledge and agree to abide by the terms and
          conditions outlined in this Adult Gaming Policy.
        </p>
      </div>
    </div>
  );
}
