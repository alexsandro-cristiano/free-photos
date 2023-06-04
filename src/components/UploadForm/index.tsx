import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {
  ErrorMessage,
  FileName,
  FormContainer,
  Input,
  Label,
  OutputContainer
} from "./styles";
import { ProgressBar } from "../ProgressBar";

export type FileProps = {
  type: string;
  name: string;
  size: number;
};

export function UploadForm() {
  const types = [
    "image/jpeg",
    "image/svg",
    "image/gif",
    "image/tiff",
    "image/webp",
    "image/jpg",
    "image/png"
  ];
  const [file, setFile] = useState<FileProps | null>(null);
  const [error, setError] = useState("");

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const selected = e.currentTarget.files?.[0];
    if (selected && types.includes(selected.type)) {
      setError("");
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select an image file");
    }
  }

  return (
    <FormContainer>
      <Label htmlFor="photo" tabIndex={0}>
        <Input
          type="file"
          accept="image/*"
          id="photo"
          onChange={handleChange}
        />
        <AiOutlinePlus size={20} />
      </Label>
      <OutputContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {file && <FileName>{file.name}</FileName>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </OutputContainer>
    </FormContainer>
  );
}
