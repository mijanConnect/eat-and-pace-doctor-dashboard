import { useMemo, useState } from "react";
import JoditEditor from "jodit-react";
import CustomButton from "@/components/common/CustomButton";

const initialPrivacyPolicy = `
<h1>Privacy Policy</h1>
<p>We value your privacy and are committed to protecting your personal information.</p>
<h3>Information We Collect</h3>
<p>We may collect contact details, health-related preferences, and usage data to improve our services.</p>
<h3>How We Use Information</h3>
<ul>
  <li>To provide and manage healthcare services</li>
  <li>To improve user experience</li>
  <li>To communicate important updates</li>
</ul>
<h3>Data Protection</h3>
<p>Your data is handled securely and only shared when necessary to provide services or comply with legal obligations.</p>
`;

export default function PrivacyPolicy() {
  const [content, setContent] = useState(initialPrivacyPolicy);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "edit">("preview");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Write privacy policy content...",
      height: 500,
    }),
    [],
  );

  const handleSave = () => {
    localStorage.setItem("privacy-policy-content", content);
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
