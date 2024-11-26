import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import { Fullscreen } from "@mui/icons-material";

const data = [
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Maternity Care",
    description:
      "Compassionate maternity care ensuring safety, support, expertise, and personalized attention.",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Medical Attendant",
    description:
      "Medical attendants provide compassionate care, assistance, and support for patients' daily health needs.",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Sample Collection",
    description:
      "Sample collection involves gathering specimens for testing, diagnosis, and medical analysis purposes",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Compounder At Home",
    description:
      "A compounder at home provides dispensing medications, and managing basic health care needs at your door-step.",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Vaccination For Child",
    description:
      "Vaccination protects against diseases by administering safe, effective vaccines to strengthen immunity.",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "On-Call Ambulance",
    description:
      "On-call ambulance service provides immediate, emergency transportation and medical care during critical situations.",
  },
];

export default function CarouselHome() {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "rgba(110, 22, 212, 0.89)",
        boxShadow: 3,
        gap: 1,
        py: 1,
        overflow: "auto",
        width: "Fullscreen",
        scrollSnapType: "x mandatory",
        "& > *": {
          scrollSnapAlign: "center",
        },
        "::-webkit-scrollbar": { display: "none" },
      }}
    >
      {data.map((item) => (
        <Card
          orientation="horizontal"
          size="sm"
          key={item.title}
          variant="outlined"
        >
          <AspectRatio ratio="1" sx={{ minWidth: 200 }}>
            <img srcSet={`${item.src}`} src={`${item.src}`} alt={item.title} />
          </AspectRatio>
          <div>
            <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
              <Typography
                level="title-lg"
                sx={{
                  textTransform: "uppercase",
                  color: "rgba(110, 22, 212, 0.89)",
                }}
              >
                {item.title}
              </Typography>
            </Box>
            <br />
            <Box>
              <Typography level="body-sm" sx={{ textAlign: "justify" }}>
                {item.description}
              </Typography>
            </Box>
          </div>
        </Card>
      ))}
    </Box>
  );
}
