import { Injectable } from '@angular/core';

export interface ExcuseCategory {
  target: string;
  level: string;
  excuses: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ExcuseService {
  private excusesData = [
    {
      target: 'Profesor',
      level: 'Leve',
      excuses: [
        'Se me fue la luz y el internet justo cuando iba a enviar la tarea.',
        'Mi perro se comió el cable del cargador de la laptop.',
        'El transporte público se retrasó más de una hora.',
        'No entendía bien la instrucción y lo hice diferente.',
        'Se me olvidó guardar el documento y la computadora se reinició.',
        'No recibí la notificación del plazo límite.',
        'Confundí la fecha de entrega con la del siguiente trimestre.',
        'Mi hermano cerró mi sesión accidentalmente.',
        'No sabía dónde subir la tarea en la plataforma.',
        'La plataforma estaba en mantenimiento ese día.'
      ]
    },
    {
      target: 'Profesor',
      level: 'Medio',
      excuses: [
        'Tuve una emergencia médica menor y tuve que ir a la clínica.',
        'Mi computadora decidió actualizarse y tardó toda la noche.',
        'Me equivoqué de horario y pensé que la clase era más tarde.',
        'Tuve que asistir a una cita con el oftalmólogo que no podía mover.',
        'Se dañó el internet de mi casa y estuve sin conexión días.',
        'Estuve ayudando a mi mamá con un trámite importante.',
        'Se me perdieron las notas que había tomado en clase.',
        'Confundí los archivos en mi computadora y casi envío el incorrecto.',
        'Mi celular explotó y pierdo acceso a mis recordatorios.',
        'Estuve en el hospital con un familiar enfermo.'
      ]
    },
    {
      target: 'Profesor',
      level: 'Crítico',
      excuses: [
        'Hubo un problema familiar muy grave y tuve que salir de la ciudad urgentemente.',
        'Me robaron la mochila con la computadora y todas mis libretas.',
        'Fui testigo de un accidente y tuve que quedarme a dar mi declaración.',
        'Mi abuela fue ingresada de emergencia al hospital.',
        'Sufrí un accidente automovilístico y estoy en recuperación.',
        'Tuve que acompañar a mi mamá a una cirugía de emergencia.',
        'Se quemó mi casa y estuve desalojado sin acceso a mis cosas.',
        'Mi papá perdió su trabajo y estoy ayudando en una crisis familiar.',
        'Fui detenido por confusión de identidad, ya se aclaró todo.',
        'Mis trámites de documentación se complicaron inesperadamente.'
      ]
    },
    {
      target: 'Jefe',
      level: 'Leve',
      excuses: [
        'Había un tráfico horrible por un accidente en la avenida principal.',
        'Mi alarma no sonó por un problema con la actualización del celular.',
        'Tuve que esperar a un técnico que venía a reparar el internet.',
        'Se me ponchó la llanta en el camino al trabajo.',
        'Perdí el autobús por 30 segundos.',
        'Mi vecino tenía cita conmigo y se me olvidó que iba usar mi coche.',
        'El metro estaba congestionado por una huelga sorpresa.',
        'Tuve que acompañar a mi mamá a un trámite rápido.',
        'Mi despertador quedó sin batería sin que me diera cuenta.',
        'Hubo un bloqueo en las calles por una manifestación.'
      ]
    },
    {
      target: 'Jefe',
      level: 'Medio',
      excuses: [
        'Me intoxiqué con algo que comí anoche y no puedo salir del baño.',
        'Se rompió una tubería en mi casa y estoy esperando al plomero.',
        'Tuve un percance con el coche, nada grave pero debo esperar al seguro.',
        'Mi hijo se enfermó y tuve que dejarlo en el colegio.',
        'Se descompuso el refrigerador y tengo comida que se va a dañar.',
        'Tuve que ir al dentista de emergencia por un dolor insoportable.',
        'Mi abuela cayó y tuvo que ir al hospital, solo como familia cercana.',
        'Me quedé sin gasolina a mitad de camino.',
        'El coche no quería arrancar esta mañana sin razón aparente.',
        'Mi mamá necesitaba ayuda con una mudanza sorpresa.'
      ]
    },
    {
      target: 'Jefe',
      level: 'Crítico',
      excuses: [
        'Estoy en urgencias por un problema de salud repentino.',
        'Falleció un familiar cercano y debo encargarme de los trámites.',
        'Mi casa sufrió daños por una tormenta y tengo que resolverlo hoy mismo.',
        'Fui víctima de un robo y debo denunciarlo ante la policía.',
        'Tuve un accidente grave en el camino y estoy en el hospital.',
        'Mi hijo desapareció y estoy buscándolo en todas partes.',
        'Me diagnosticaron algo grave y tengo que operarme de urgencia.',
        'Mi esposa dio a luz de emergencia, estamos en el hospital.',
        'Se inundó completamente mi casa por un desbordamiento.',
        'Fui citado urgentemente en un juzgado por asuntos legales.'
      ]
    },
    {
      target: 'Pareja',
      level: 'Leve',
      excuses: [
        'Se me olvidó por completo, tenía la cabeza en el trabajo. ¡Lo siento!',
        'No vi tu mensaje, tenía el celular en silencio y no vibró.',
        'Pensé que habíamos quedado para mañana, ¡qué despistado/a soy!'
      ]
    },
    {
      target: 'Pareja',
      level: 'Medio',
      excuses: [
        'Me quedé dormido/a después del trabajo, estaba agotado/a.',
        'Tuve que quedarme más tiempo en la oficina para resolver una urgencia.',
        'Me encontré con un viejo amigo y se me fue el tiempo platicando.'
      ]
    },
    {
      target: 'Pareja',
      level: 'Crítico',
      excuses: [
        'Estaba preparando una sorpresa para ti y algo salió mal, por eso no llegué.',
        'Me robaron el celular y no tenía cómo avisarte.',
        'Me sentí muy mal emocionalmente y necesitaba estar solo/a, perdóname por no avisar.'
      ]
    },
    {
      target: 'Amigo',
      level: 'Leve',
      excuses: [
        'Me quedé sin batería y no pude avisarte que iba tarde.',
        'Me enredé viendo una serie y perdí la noción del tiempo.',
        'Creí que tú ibas a pasar por mí.'
      ]
    },
    {
      target: 'Amigo',
      level: 'Medio',
      excuses: [
        'No tengo nada de dinero y me dio pena decirte.',
        'Vinieron visitas sorpresa a mi casa y no me puedo ir.',
        'Me siento un poco mal del estómago, mejor nos vemos otro día.'
      ]
    },
    {
      target: 'Amigo',
      level: 'Crítico',
      excuses: [
        'Tuve un problema legal y estoy en la delegación, luego te explico.',
        'Me peleé muy feo con mi familia y no tengo ánimos de salir.',
        'Perdí mis llaves y no puedo salir de mi casa.'
      ]
    },
    {
      target: 'Mamá',
      level: 'Leve',
      excuses: [
        'No escuché el celular, estaba en la mochila.',
        'Pensé que mi hermano te había avisado.',
        'Se me olvidó sacar la carne del congelador, estaba estudiando.'
      ]
    },
    {
      target: 'Mamá',
      level: 'Medio',
      excuses: [
        'No pude ir a la comida porque tuve que ayudar a un amigo con un proyecto final.',
        'Me gasté el dinero en algo de la escuela y no me alcanzó para lo que me pediste.',
        'Me quedé dormido en el camión y me pasé de parada.'
      ]
    },
    {
      target: 'Mamá',
      level: 'Crítico',
      excuses: [
        'Reprobé la materia porque el profesor me tiene manía, no por falta de estudio.',
        'Choqué el coche pero yo no tuve la culpa, el otro se pasó el alto.',
        'No voy a poder graduarme este semestre por un error de servicios escolares.'
      ]
    }
  ];

  constructor() { }

  public getRandomExcuse(target: string, level: string): string {
    const category = this.excusesData.find(c => c.target === target && c.level === level);
    if (category && category.excuses.length > 0) {
      const randomIndex = Math.floor(Math.random() * category.excuses.length);
      return category.excuses[randomIndex];
    }
    return "Error 404: Excusa no encontrada. Improvisa algo sobre extraterrestres.";
  }

  public getTargets(): string[] {
    const targets = new Set(this.excusesData.map(c => c.target));
    return Array.from(targets);
  }

  public getLevels(): string[] {
    const levels = new Set(this.excusesData.map(c => c.level));
    return Array.from(levels);
  }
}
