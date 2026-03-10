"use client";

import { useMemo, useState } from "react";
import JoditEditor from "jodit-react";
import CustomButton from "@/components/common/CustomButton";

const initialTerms = `
<h1>Terms and Conditions</h1>
<p>Welcome to our website. By accessing or using our services, you agree to comply with these terms and conditions.</p>

<h3>Use of Services</h3>
<ul>
  <li>You must be at least 18 years old to use our services.</li>
  <li>You agree not to misuse or interfere with the services.</li>
  <li>All content provided is for personal, non-commercial use.</li>
</ul>

<h3>User Responsibilities</h3>
<p>Users are responsible for maintaining the confidentiality of their accounts and for all activities under their account.</p>

<h3>Intellectual Property</h3>
<p>All content, logos, and trademarks are owned by the company or its licensors. Unauthorized use is prohibited.</p>

<h3>Limitation of Liability</h3>
<p>We are not liable for any damages resulting from the use or inability to use our services.</p>

<h3>Changes to Terms</h3>
<p>We may update these terms periodically. Continued use of the services implies acceptance of any changes.</p>
`;

export default function TermsAndConditions() {
  const [content, setContent] = useState(initialTerms);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "edit">("preview");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Write terms and conditions content...",
      height: 500,
    }),
    [],
  );

  const handleSave = () => {
    localStorage.setItem("terms-and-conditions-content", content);
    setIsSaved(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("preview")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            activeTab === "preview"
              ? "bg-primary text-primary-foreground"
              : "border bg-background"
          }`}
        >
          Preview
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("edit")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            activeTab === "edit"
              ? "bg-primary text-primary-foreground"
              : "border bg-background"
          }`}
        >
          Edit
        </button>
      </div>

      {activeTab === "edit" ? (
        <>
          <div className="rounded-lg">
            <JoditEditor
              value={content}
              config={config}
              onBlur={(newContent) => {
                setContent(newContent);
                setIsSaved(false);
              }}
              onChange={() => {}}
            />
          </div>
          <div className="flex items-center justify-end gap-3">
            {isSaved && (
              <p className="text-sm text-green-600">Saved successfully</p>
            )}
            <CustomButton onClick={handleSave} className="w-45 cursor-pointer">
              Save
            </CustomButton>
          </div>
        </>
      ) : (
        <div className="rounded-[3px] border bg-white p-5">
          <div
            className="space-y-3 text-sm leading-6 text-foreground"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      )}
    </div>
  );
}
