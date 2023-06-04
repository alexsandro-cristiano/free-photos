import { useEffect } from "react";
import { Loading } from "./styles";
import { FileProps } from "../UploadForm";
import { useStorage } from "../../hooks/useStorage";

interface ProgressBarProps {
  file: FileProps | null;
  setFile: React.Dispatch<React.SetStateAction<FileProps | null>>;
}
export function ProgressBar({ file, setFile }: ProgressBarProps) {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <Loading style={{ width: progress + "%" }} />;
}
