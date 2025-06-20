import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import type { SingleProduct } from "../../../Types";

interface ProductDetailsProps {
  product: SingleProduct;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedImg, setselectedImg] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          width={360}
          src={`${import.meta.env.VITE_BASE_URL}${product.productImg[selectedImg].url}`}
          alt=""
        />
      </Box>

      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">{product.productTitle}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${product.productPrice}
        </Typography>
        <Typography variant="body1">{product.productDescription}</Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {product.productImg.map((item, index) => {
                return (
                  <ToggleButton
                    key={item.id}
                    value={index}
                    sx={{
                      width: "110px",
                      height: "110px",
                      mx: 1,
                      p: "0",
                      opacity: "0.5",
                    }}
                  >
                    <img
                      onClick={() => {
                        setselectedImg(index);
                      }}
                      style={{ borderRadius: 3 }}
                      height={"100%"}
                      width={"100%"}
                      src={`${import.meta.env.VITE_BASE_URL}${item.url}`}
                      alt=""
                    />
                  </ToggleButton>
                );
              }
            )}
          </ToggleButtonGroup>
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
