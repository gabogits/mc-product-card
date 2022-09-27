# MC-Product-Card

Este es un paquete de pruebas de despliegue NPM

### Author

## Ejemplo

```
import {ProductImage,ProductTitle, ProductButtons, ProductCard } from "mc-product-card"
```

```
<ProductCard
          product={products[0]}
          initialValues={{
            count: 4,
          }}
        >
          {({ reset, increaseBy, isMaxCountReached, count }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
</ProductCard>
```
