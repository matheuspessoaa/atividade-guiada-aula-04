import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';

export default function CardProdutoMUI({ imagem, nome, descricao, preco }) {
  return (
    <Card sx={{ maxWidth: 300, marginTop: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={imagem}
        alt={nome}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descricao}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
          R$ {preco}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary" fullWidth>
          COMPRAR
        </Button>
      </CardActions>
    </Card>
  );
}
