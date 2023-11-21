import { Button, ButtonProps, ThemeProvider } from '@poc-lib/components';

const variants = ['primary', 'secondary', 'accent', 'ghost'];

function App() {
  return (
    <ThemeProvider>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          columnGap: 16,
          rowGap: 8,
        }}
      >
        {variants.map((variant) => (
          <Button variant={variant as ButtonProps['variant']} key={variant}>
            {variant}
          </Button>
        ))}
        {variants.map((variant) => (
          <Button
            variant={variant as ButtonProps['variant']}
            key={variant}
            disabled
          >
            {variant}
          </Button>
        ))}
      </div>
    </ThemeProvider>
  );
}

export default App;
