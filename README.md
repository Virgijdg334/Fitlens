# 🏋️‍♂️ Fitlens - Inteligencia Artificial Avanzada para el Gimnasio

Fitlens es una aplicación móvil multiplataforma desarrollada en **Flutter** diseñada para revolucionar la experiencia en las salas de entrenamiento. Su núcleo innovador utiliza visión por computador (*On-Device AI*) para escanear, reconocer de forma instantánea cualquier máquina de gimnasio y guiar al usuario mediante métricas y fichas interactivas en su proceso deportivo. 

Desarrollada bajo un enfoque de arquitectura limpia, reactividad avanzada y optimización de costes operacionales.

---

## 📱 Características Principales (Alcance del MVP)

* **🧠 Escáner con IA (Core del Negocio):** Reconocimiento automatizado del equipamiento físico mediante modelos predictivos optimizados. Al procesar la captura, la app despliega una ficha técnica interactiva con instrucciones de seguridad, variantes de ejecución y músculos implicados.
* **📊 Gestión de Entrenamientos:** Digitalización completa de las sesiones de carga, sustituyendo las notas tradicionales. Permite registrar series, repeticiones, pesos de forma analítica y monitorizar la sobrecarga progresiva.
* **🥗 Módulo de Dietas y Nutrición:** Planificador avanzado y registro analítico de la ingesta diaria de macronutrientes adaptado a objetivos de volumen, definición o mantenimiento calórico.
* **🎥 Biblioteca Multimedia Integrada:** Repositorio estructurado de videotutoriales explicativos en alta definición orientados a perfeccionar la biomecánica y prevenir lesiones.
* **👥 Foro Comunitario:** Red social interna orientada a potenciar la adherencia (*engagement*), permitiendo la resolución colectiva de dudas técnicas mediante mecánicas de preguntas y respuestas.
* **🔔 Notificaciones Push Inteligentes:** Sistema centralizado de alertas locales y distribuidas para recordar entrenamientos, tomas de comidas y metas alcanzadas.

---

## 🛠️ Stack Tecnológico y Arquitectura

El diseño del software se ha estructurado dividiendo responsabilidades en tres capas arquitectónicas clave para asegurar la escalabilidad y contener los costes fijos:

### ⚙️ Desarrollo Cliente (Frontend)
* **Framework:** Flutter (Ecosistema Google) con el lenguaje de tipado fuerte **Dart**.
* **Rendimiento:** Compilación Ahead-of-Time (AOT) y renderizado nativo a 60/120 FPS mediante su propio motor gráfico sin puentes (*bridges*) JavaScript.
* **Gestión de Estado:** Patrón **BLoC** (*Business Logic Component*) estructurado bajo principios de **Clean Architecture** para desacoplar por completo la interfaz de usuario de las reglas de negocio.
* **Entorno:** Visual Studio Code complementado con análisis estático de código.

### 🌐 Infraestructura de Servidor (Backend-as-a-Service)
* **Plataforma:** Arquitectura *Serverless* sobre el ecosistema de **Firebase**.
* **Base de Datos:** **Cloud Firestore**, base de datos NoSQL documental orientada a eventos con persistencia e inferencia de datos en local (*offline support*).
* **Seguridad e Identidad:** **Firebase Authentication** para la gestión cifrada de credenciales y federación de identidades (*Social Login*).
* **Almacenamiento:** **Firebase Storage** para la persistencia ágil de recursos multimedia e imágenes de perfil.

### 🧠 Inteligencia Artificial y Visión por Computador
* **Modelado y Entrenamiento:** Desarrollado en **Python** utilizando **TensorFlow** y **Keras** para la red neuronal profunda. Manejo y procesamiento de datos mediante *NumPy*, *Pandas* y *OpenCV*.
* **Estrategia:** Técnicas de *Transfer Learning* basadas en la arquitectura ligera preentrenada **MobileNetV2**.
* **Inferencia Local (On-Device AI):** El modelo final se optimiza y cuantiza en formato **.tflite** a través de **TensorFlow Lite**. Esto permite que el reconocimiento visual se ejecute localmente en el procesador del smartphone, garantizando la privacidad absoluta de los datos biométricos y garantizando el funcionamiento offline sin consumo de APIs en la nube.

---

## 📁 Estructura del Proyecto (Clean Architecture)

```text
lib/
├── data/              # Capa de datos: Repositorios, fuentes de datos (Remote/Local) y Modelos NoSQL
├── domain/            # Capa de negocio pura: Entidades y Casos de Uso (Use Cases) independientes
├── presentation/      # Capa de UI: Componentes visuales (Widgets), Vistas (Pages) y Gestión de Estado (BLoC)
├── core/              # Utilidades transversales, temas globales, configuraciones de Firebase e IA
└── main.dart          # Punto de entrada de la aplicación móvil
