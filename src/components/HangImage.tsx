
type HangImageProps = {
  imageNumber?: number;
};

export function HangImage({ imageNumber = 0 }: HangImageProps) {
  return (
    <img
      src={`/${imageNumber}.png`}
      alt="Imagen del ahorcado"
      style={{ width: '250px', maxWidth: '100%' }}
    />
  );
}
