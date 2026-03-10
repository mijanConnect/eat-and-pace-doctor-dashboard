"use client";

import { useMemo, useState } from "react";
import JoditEditor from "jodit-react";
import CustomButton from "@/components/common/CustomButton";
import {
  useGetAboutUsQuery,
  useUpdateAboutUsMutation,
} from "@/redux/slices/authSlice";

const initialAboutUs = `
<h1>About Us</h1>
<p>Welcome to our company! We are dedicated to providing the best services to our clients with integrity and excellence.</p>

<h3>Our Mission</h3>
<p>Our mission is to deliver high-quality solutions that improve our customers' lives and businesses.</p>

<h3>Our Vision</h3>
<p>We strive to be the leading service provider in our industry, known for innovation and customer satisfaction.</p>

<h3>Our Values</h3>
<ul>
  <li>Integrity – We always do the right thing.</li>
  <li>Excellence – We deliver top-quality services.</li>
  <li>Collaboration – We work together to achieve great results.</li>
  <li>Innovation – We embrace new ideas and technologies.</li>
</ul>

<h3>Our Team</h3>
<p>Our team consists of passionate professionals committed to achieving success and ensuring our clients' satisfaction.</p>
`;

export default function AboutUs() {
  const [draftContent, setDraftContent] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "edit">("preview");
  const { data: aboutUsData, isLoading: isPreviewLoading } = useGetAboutUsQuery(
    {},
  );
  const [updateAboutUs, { isLoading: isSaving }] = useUpdateAboutUsMutation();

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Write About Us content...",
      height: 500,
    }),
    [],
  );

  const editorContent = draftContent ?? aboutUsData?.content ?? initialAboutUs;

  const handleSave = async () => {
    try {
      await updateAboutUs({ content: editorContent }).unwrap();
      setIsSaved(true);
      setDraftContent(null);
    } catch (error) {
      console.error("Failed to save About Us:", error);
      setIsSaved(false);
    }
  };

  const previewContent = aboutUsData?.content ?? initialAboutUs;

  return (
    <div className="space-y-4">
      {/* Tabs */}
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

      {/* Content */}
      {activeTab === "edit" ? (
        <>
          <div className="rounded-lg">
            <JoditEditor
              value={editorContent}
              config={config}
              onBlur={(newContent) => {
                setDraftContent(newContent);
                setIsSaved(false);
              }}
              onChange={() => {}}
            />
          </div>
          <div className="flex items-center justify-end gap-3">
            {isSaved && (
              <p className="text-sm text-green-600">Saved successfully</p>
            )}
            <CustomButton
              onClick={handleSave}
              className="w-45 cursor-pointer"
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save"}
            </CustomButton>
          </div>
        </>
      ) : (
        <div className="rounded-[3px] border bg-white p-5">
          {isPreviewLoading ? (
            <p className="text-sm text-muted-foreground">Loading preview...</p>
          ) : (
            <div
              className="space-y-3 text-sm leading-6 text-foreground"
              dangerouslySetInnerHTML={{ __html: previewContent }}
            />
          )}
        </div>
      )}
    </div>
  );
}
