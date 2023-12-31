import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GetAppIcon from "@mui/icons-material/GetApp";

const ResumeDownload = () => {
  const handleDownloadClick = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = downloadLink.href =
      process.env.PUBLIC_URL + "/Resume.pdf";
    downloadLink.download = "SadieJaneBuytendorp_Resume.pdf";
    downloadLink.click();
  };
  return (
    <Box>
      <Button
        variant="contained"
        startIcon={<GetAppIcon />}
        sx={{ m: 5 }}
        onClick={handleDownloadClick}
      >
        Download PDF
      </Button>
    </Box>
  );
};

export default ResumeDownload;
