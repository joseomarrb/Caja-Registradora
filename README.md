# Caja Registradora

Este proyecto fue creado para hacer un proyecto de freeCodeCamp en el que tengo que crear una caja registradora siguiendo las siguientes reglas que estan más abajo.

## Reglas del Proyecto

Aquí crearás una aplicación de caja registradora que devolverá el cambio al cliente en función del precio del artículo, la cantidad de efectivo proporcionada por el cliente y la cantidad de efectivo en la caja registradora. También deberás mostrar diferentes mensajes al usuario en diferentes situaciones, como cuando el cliente proporciona muy poco efectivo o cuando la caja registradora no tiene suficiente para emitir el cambio correcto.

En el archivo ***script.js***, se te han proporcionado las variables ***price*** y ***cid***. La variable ***price*** es el precio del artículo y la variable ***cid*** es el efectivo en la caja registradora, que es una matriz 2D que enumera la moneda disponible en la caja registradora.

La otra variable que deberás agregar es la variable ***cash***, que es la cantidad de efectivo proporcionada por el cliente para el artículo, que se proporciona a través de un elemento de entrada en la página.

Si deseas probar tu aplicación con diferentes valores para ***price*** y ***cid***, asegúrate de declararlos con la palabra clave **let** para que nuestras pruebas puedan reasignarlos.

Su aplicación debe mostrar diferentes mensajes dependiendo del precio del artículo, la cantidad de efectivo proporcionada por el cliente y la cantidad de efectivo en el cajón:

- ***"Status: INSUFFICIENT_FUNDS"***: si ***cash-in-drawer*** el efectivo en el cajón es inferior al cambio adeudado o si no puede devolver el cambio exacto.

- ***"Status: CLOSED"***: si ***cash-in-drawer*** el efectivo en el cajón es igual al cambio adeudado.

- ***"Status: OPEN"***: si ***cash-in-drawer*** el efectivo en el cajón es mayor que el cambio adeudado y puede devolver el cambio, con el cambio adeudado en monedas y billetes ordenado de mayor a menor.

[![Captura-de-pantalla-50.png](https://i.postimg.cc/kGb3sF9G/Captura-de-pantalla-50.png)](https://postimg.cc/K3xHvT1h)

1. Debe tener un ***input*** de entrada con un id de ***"cash"***.

2. Debe tener un elemento ***div, span o p*** con un id de ***"change-due"***.

3. Debe tener un elemento de ***button*** con un id de ***"purchase-btn"***.

4. Cuando el valor en el elemento ***#cash*** es menor que el ***price***, debe aparecer una alerta con el texto ***"Customer does not have enough money to purchase the item"***.

5. Cuando el valor en el elemento ***#cash*** es igual al precio ***price***, el valor en el elemento ***#change-due*** debe ser ***"No change due - customer paid with exact cash"***.

6. Cuando el precio es ***19.5***, el valor en el elemento ***#cash*** es 20, ***cid*** es ***[["PENNY", 1,01], ["NICKEL", 2,05], ["DIME", 3,1], ["QUARTER", 4,25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]***, y se hace clic en el elemento ***#purchase-btn***, el valor en el elemento ***#change-due*** debe ser ***"Status: OPEN QUARTER: $0.5"***.

7. Cuando el precio es ***3.26***, el valor en el elemento ***#cash*** es 100, ***cid*** es ***[["PENNY", 1,01], ["NICKEL", 2,05], ["DIME", 3,1], ["QUARTER", 4,25], ["ONE", 90], ["FIVE", 55], ["DIEZ", 20], ["TWENTY", 60], ["CIEN", 100]]***, y se hace clic en el elemento ***#purchase-btn***, el valor en el elemento ***#change-due*** debe ser ***"Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04"***.

8. Cuando el precio es ***19.5***, el valor en el elemento ***#cash*** es 20, ***cid*** es ***[["PENNY", 0,01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]***, y se hace clic en el elemento ***#purchase-btn***, el valor en el elemento ***#change-due*** debe ser ***"Status: INSUFFICIENT_FUNDS"***.

9. Cuando el precio es ***19.5***, el valor en el elemento ***#cash*** es 20, ***cid*** es ***[["PENNY", 0,01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]***, y se hace clic en el elemento ***#purchase-btn***, el valor en el elemento ***#change-due*** debe ser ***"Status: INSUFFICIENT_FUNDS"***.

10. Cuando el precio es ***19.5***, el valor en el elemento ***#cash*** es 20, ***cid*** es ***[["PENNY", 0,5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]***, y se hace clic en el elemento ***#purchase-btn***, el valor en el elemento ***#change-due*** debe ser ***"Status: CLOSED PENNY: $0.5"***.

Cumpla con las historias de usuario y supere todas las pruebas a continuación para completar este proyecto. Aporte su propio estilo personal. ¡Feliz codificación!
