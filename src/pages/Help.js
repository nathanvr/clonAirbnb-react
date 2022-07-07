import { Accordion, Tabs, Text, List} from '@mantine/core';

const Help =()=>{

    return(
      <div className='containter-help'>
        <div>
          <h1>Preguntas frecuentes</h1>
        </div>
        <Tabs color="red" tabPadding="sm">
          <Tabs.Tab label="Anfitrión">
              <Accordion  disableIconRotation>
              <Accordion.Item label="Cómo cancelar la reservación de una estadía como Anfitrión">
              Los huéspedes en Airbnb siempre están emocionados por su viaje, pero entendemos que en ciertas circunstancias necesites cancelar. En esos casos, te recomendamos que también le envíes un mensaje al huésped tan pronto como puedas.
                <Text  weight={700}>Para cancelar una reservación:</Text>
                <List type="ordered">
                  <List.Item>Accede a tus sitios desde tu cuenta</List.Item>
                  <List.Item>Haz click en cancelar reserva</List.Item>
                  <List.Item>Responde las preguntas</List.Item>
                </List>
                <Text>Es posible que no puedas cancelar reservaciones activas ni aquellas para las que el check-in esté programando en las próximas 24 horas. En esos casos, deberás contactarte con nosotros.</Text>
                <Text  weight={700}>Penalizaciones por cancelación.</Text>
                <Text>Cancelar la reservación de un huésped puede afectar sus planes considerablemente. Por esa razón, aplicaremos penalizaciones, a menos que el motivo de la cancelación se daba a causas extenuantes.</Text>
            </Accordion.Item>

            <Accordion.Item label="Sanciones para anfitriones por cancelar reservaciones">
                <Text  weight={700}>Tarifa de cancelación.</Text>
                Si cancelas una reservación confirmada, se te deducirá una tarifa de tu primer cobro después de cancelar. La cantidad dependerá de cuándo aceptaste la reservación y del tiempo que quedaba para el check-in del huésped al momento de cancelar:
                <List type="ordered">
                  <List.Item>Más de 7 días antes de la fecha del check-in: descontaremos USD 50 de tu próximo cobro.</List.Item>
                  <List.Item>Menos de 7 días antes de la fecha del check-in: descontaremos USD 100 de tu próximo cobro.</List.Item>
                </List>
                Si cancelas tres o más reservaciones en un año, tendremos que suspender o desactivar tu anuncio.
                Si la cancelas antes un día antes de la fecha de check-in, publicaremos una reseña automática en el perfil de tu anuncio, en la que se indicará que cancelaste una reservación.

Si cancelas el día del check-in o después, los huéspedes pueden dejar una reseña pública en el perfil de tu anuncio.
            </Accordion.Item>

            <Accordion.Item label="AirCover para anfitriones">
            AirCover para anfitriones es una protección amplia que incluye un seguro de responsabilidad civil y una protección contra daños, ambos de 1 millón de dólares. Siempre gratuita. Incluida en todas las reservaciones.
            </Accordion.Item> 
            <Accordion.Item label="Si tu huésped cancela">
            Puede pasar que los planes cambien. Si un huésped tiene que cancelar la reservación, estamos aquí para ayudarte a recuperarla rápidamente.
            Si un huésped cancela la reservación:
                <List type="ordered">
                  <List.Item>Te informaremos de inmediato</List.Item>
                  <List.Item>Desbloquearemos las fechas de las reservaciones</List.Item>
                  <List.Item>Coordinaremos los cobros y reembolsos</List.Item>
                </List>
                <Text>Los pagos realizados fuera de Airbnb o en efectivo constituyen un incumplimiento de nuestros Términos deservicio y pueden dar lugar a la cancelación de tu cuenta de Airbnb. Los pagos realizados fuera de la plataforma hacen que sea más difícil para nosotros proteger tu información y te ponen en mayor riesgo de fraude y otros problemas de seguridad.</Text>

            </Accordion.Item>
            </Accordion>
            </Tabs.Tab>




            <Tabs.Tab label="Huésped">
              <Accordion  disableIconRotation>
                <Accordion.Item label="Cómo cancelar la reservación de una estadía">
                Tus planes cambiaron y ahora tienes que cancelar la reservación. No hay problema. Puedes acceder desde tu cuenta en Ver tus reservas para cancelar tu reservación.
                <Text  weight={700}>Para cancelar una reservación:</Text>
                <List type="ordered">
                  <List.Item>Accede a tus reservas desde tu cuenta</List.Item>
                  <List.Item>Haz click en cancelar reserva</List.Item>
                </List>
                <Text>Si tienes algún problema durante tu estadía, puedes pedirle a tu anfitrión que lo arregle, solicitar un reembolso parcial o solicitar la cancelación de tu reservación para obtener un reembolso total. Es importante que envíes la solicitud en un plazo de 24 horas desde que detectes el problema y el anfitrión tendrá 1 hora para responder. Si rechaza la solicitud o no responde, puedes pedir ayuda a Airbnb.</Text>
            </Accordion.Item>

            <Accordion.Item label="Si el anfitrión cancela tu reservación">
            Aunque es inusual, a veces los anfitriones cancelan las reservaciones. Entendemos que esto puede afectar sus planes en gran medida. Ten la seguridad que todas las reservaciones realizadas en Airbnb incluyen AirCover, que protege a los huéspedes contra problemas importantes, incluidas las cancelaciones realizadas por el anfitrión dentro de los 30 días previos al check in.

En el caso improbable de que un anfitrión tenga que cancelar tu reservación en los 30 días previos al check-in, recibirás un reembolso automático y te ayudaremos a encontrar un alojamiento similar o mejor para que vuelvas a reservar.
            </Accordion.Item>

            <Accordion.Item label="¿Qué es AirCover?">
            AirCover es una protección amplia gratuita que se incluye en cada reservación. Incluye protección en caso de que el anfitrión cancele, haya imprecisiones en el anuncio o surjan otros inconvenientes, como problemas al momento de hacer el check-in, así como una línea de protección 24 horas.
            </Accordion.Item> 
            <Accordion.Item label="Formas de pago aceptadas">
            <Text  weight={700}>Opciones de pago disponibles:</Text>
                <List type="ordered">
                  <List.Item>Productos Davivienda</List.Item>
                  <List.Item>Tarjeta crédito o débito</List.Item>
                  <List.Item>Daviplata</List.Item>
                </List>
                <Text>Los pagos realizados fuera de Airbnb o en efectivo constituyen un incumplimiento de nuestros Términos deservicio y pueden dar lugar a la cancelación de tu cuenta de Airbnb. Los pagos realizados fuera de la plataforma hacen que sea más difícil para nosotros proteger tu información y te ponen en mayor riesgo de fraude y otros problemas de seguridad.</Text>

            </Accordion.Item>
            </Accordion>
            </Tabs.Tab>
      </Tabs>
      </div>
    )
}

export default Help;
