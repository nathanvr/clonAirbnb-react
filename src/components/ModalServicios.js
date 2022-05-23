import React from "react";
import { Icon } from '@iconify/react';


const ModalServicios = () =>{
    return(
        <div>
            <div className="info-general">
                <div className="info-1">
                    <ul>
                        <li><Icon icon="mdi:hair-dryer-outline" /> Secadora de pelo</li>
                        <li><Icon icon="icon-park-outline:handwashing-fluid" /> Shampoo</li>
                        <li><Icon icon="akar-icons:water" /> Agua caliente</li>
                    </ul>
                    <ul>
                        <li><Icon icon="ic:outline-local-laundry-service" />   Lavadora</li>
                        <li><Icon icon="bxs:dryer" /> Secadora</li>
                        <li><Icon icon="ep:toilet-paper" /> Servicios imprescindibles</li>
                        <li><Icon icon="bx:blanket" /> Sábanas</li>
                        <li><Icon icon="fa6-solid:mattress-pillow" /> Almohada</li>
                    </ul>
                    <ul>
                        <li><Icon icon="arcticons:hanju-tv" /> Tv</li>
                        <li><Icon icon="clarity:book-line" /> Libros y material de lectura</li>
                    </ul>
                    <ul>
                        <li><Icon icon="mdi:cradle-outline" /> Practicuna o cuna de viaje</li>
                        <li><Icon icon="emojione-monotone:game-die" /> Juegos de mesa</li>
                    </ul>
                    <ul>
                        <li><Icon icon="iconoir:air-conditioner" /> Aire acondicionado</li>
                        <li><Icon icon="carbon:temperature-hot" /> Calefacción</li>
                    </ul>
                    <ul>
                        <li><Icon icon="clarity:wifi-line" /> Wifi</li>
                    </ul>
                    <ul>
                        <li><Icon icon="tabler:tools-kitchen-2" /> Cocina</li>
                        <li><Icon icon="icon-park-outline:refrigerator" />Refrigerador</li>
                        <li><Icon icon="ic:baseline-microwave" />Microondas</li>
                        <li><Icon icon="tabler:tools-kitchen-2" /> Utensilios básicos para cocinar</li>
                        <li><Icon icon="ps:cutlery" />Platos y cubiertos</li>
                        <li><Icon icon="arcticons:freezer" />Congelador</li>
                        <li><Icon icon="material-symbols:dishwasher-gen-outline" />Lavavajillas</li>
                        <li><Icon icon="mdi:stove" />Cocina</li>
                        <li><Icon icon="material-symbols:oven-gen-outline" />Horno</li>
                        <li><Icon icon="icon-park-outline:kettle" />Hervidor de agua</li>
                        <li><Icon icon="material-symbols:coffee-maker-outline-sharp" />Cafetera</li>
                    </ul>
                    <ul>
                        <li><Icon icon="ic:baseline-balcony" /> Patio o balcón</li>
                        <li><Icon icon="icon-park-outline:fire-two" /> Fogata</li>
                        <li><Icon icon="iconoir:bbq" /> Parrilla</li>
                    </ul>
                    <ul>
                        <li><Icon icon="emojione-monotone:bathtub" /> Jacuzzi</li>
                    </ul>
                    <ul>
                        <li><Icon icon="akar-icons:key" /> Acceso sin restricción de horario</li>
                        <li><Icon icon="fontisto:locked" /> Caja de seguridad con llaves</li>
                    </ul>
                    <ul>
                        <li><Icon icon="fluent:video-security-20-regular" />No disponible: Cámaras de seguridad en la propiedadCámaras de seguridad en la propiedad</li>
                        <li><Icon icon="mdi:smoke-detector-variant" />No disponible: Detector de humoDetector de humo</li>
                        <li><Icon icon="mdi:smoke-detector-outline" />No disponible: Detector de monóxido de carbonoDetector de monóxido de carbono</li>
                        <li><Icon icon="bi:door-open" />No disponible: Entrada independienteEntrada independiente</li>
                    </ul>
                    <input type="checkbox" ><li><Icon icon="emojione-monotone:bathtub" /> Jacuzzi</li></input>
                        <input type="checkbox" ><li><Icon icon="ic:baseline-balcony" /> Patio o balcón</li></input>
                        <input type="checkbox" ><li><Icon icon="iconoir:bbq" /> Parrilla</li></input>
                        <input type="checkbox" ><li><Icon icon="icon-park-outline:fire-two" /> Fogata</li></input>
                        <input type="checkbox"><li><Icon icon="emojione-monotone:game-die" /> Juegos de mesa</li></input>
                        <input type="checkbox" ><li><Icon icon="mdi:hair-dryer-outline" /> Secadora de pelo</li></input>
                        <input type="checkbox" ><li><Icon icon="icon-park-outline:handwashing-fluid" /> Shampoo</li></input>
                        <input type="checkbox" ><li><Icon icon="akar-icons:water" /> Agua caliente</li></input>

                    <h3>¿Estos son los servicios preferidos por los huéspedes. ¿Los tienes?</h3>

                        <input type="checkbox"  ><li><Icon icon="clarity:wifi-line" /> Wifi</li></input>
                        <input type="checkbox" ><li><Icon icon="arcticons:hanju-tv" /> Tv</li></input>
                        <input type="checkbox" ><li><Icon icon="tabler:tools-kitchen-2" /> Cocina</li></input>
                        <input type="checkbox" ><li><Icon icon="bxs:washer" /> Lavadora</li></input>
                        <input type="checkbox" ><li><Icon icon="bxs:dryer" /> Secadora</li></input>
                        <input type="checkbox"><li><Icon icon="ant-design:car-outlined" /> Estacionamiento gratuito</li></input>
                        <input type="checkbox"><li><Icon icon="iconoir:air-conditioner" /> Aire acondicionado</li></input>
                
                    <h3>¿Con cuáles servicios cuentas?</h3>
                    <ul>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="ep:toilet-paper" /> Servicios imprescindibles</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="bx:blanket" /> Sábanas</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="fa6-solid:mattress-pillow" /> Almohada</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="iconoir:air-conditioner" /> Aire acondicionado</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="carbon:temperature-hot" /> Calefacción</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="icon-park-outline:refrigerator" />Refrigerador</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="ic:baseline-microwave" />Microondas</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="tabler:tools-kitchen-2" /> Utensilios básicos para cocinar</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="ps:cutlery" />Platos y cubiertos</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="arcticons:freezer" />Congelador</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="material-symbols:dishwasher-gen-outline" />Lavavajillas</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="mdi:stove" />Estufa</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="material-symbols:oven-gen-outline" />Horno</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="icon-park-outline:kettle" />Hervidor de agua</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="material-symbols:coffee-maker-outline-sharp" />Cafetera</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="clarity:book-line" /> Libros y material de lectura</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="mdi:cradle-outline" /> Practicuna o cuna de viaje</li></input>
                    </ul>
                    <h3>¿Cuentas con alguno de estos elementos de seguridad?</h3>
                    <ul>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="clarity:first-aid-kit-line" /> Botiquín</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="la:fire-extinguisher" /> Extintor de incendios</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="akar-icons:key" /> Acceso sin restricción de horario</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="fontisto:locked" /> Caja de seguridad con llaves</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="fluent:video-security-20-regular" />Cámaras de seguridad en la propiedadCámaras de seguridad en la propiedad</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="mdi:smoke-detector-variant" />Detector de humoDetector de humo</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="mdi:smoke-detector-outline" />Detector de monóxido de carbonoDetector de monóxido de carbono</li></input>
                        <input type="checkbox" checked={true} name="controlled"><li><Icon icon="bi:door-open" />Entrada independienteEntrada independiente</li></input>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default ModalServicios;
