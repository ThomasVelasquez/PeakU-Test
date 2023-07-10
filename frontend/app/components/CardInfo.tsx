import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface ICardInfoProps {
  comercialPercentage: number;
  residencialPercentage: number;
  industrialPercentage: number;
}

export default function CardInfo({
  comercialPercentage,
  residencialPercentage,
  industrialPercentage,
}: ICardInfoProps) {
  return (
    <Card
      
      sx={{
        background: "linear-gradient(to bottom, #5e9ff7, #3c80f6)",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        width: "100%",
        height: "250px",
        padding: "20px",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <CardContent  >
        <Typography
          sx={{ fontSize: 20, fontWeight: "Bold" }}
          color="white"
          gutterBottom
        >
          Los porcentajes a los sectores correspondientes son los siguientes:
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <div style={{ fontSize: "25px", fontWeight: "Bold", color:'white'}}>
            Residencial: {Math.trunc(residencialPercentage)}
          </div>
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <div style={{ fontSize: "25px", fontWeight: "Bold", color:'white' }}>
            Comercial: {Math.trunc(comercialPercentage)}
          </div>
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <div style={{ fontSize: "25px", fontWeight: "Bold", color:'white' }}>
            Industrial: {Math.trunc(industrialPercentage)}
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
