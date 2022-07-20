import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { getProductsApi } from "../utils/api";
import { productAction } from "../actions/productAction";
import { useSelector } from "react-redux";

export default function products() {
  // const productsApi = await getProductsApi("products");
  const prodc = useSelector((state: any)=> state.productDetails)
  const pr = productAction();
  console.log("fff", prodc);
  return (
    <>
      <Grid container xs={12} sx={{}}>
        {prodc?.map((product: any, index: number) => {
          console.log("mpro", product);
          return (
            <Card sx={{ width: "250px" }} key={index}>
              <CardActionArea>
                <CardMedia component="img" height="100" image={product.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Grid>
    </>
  );
}
