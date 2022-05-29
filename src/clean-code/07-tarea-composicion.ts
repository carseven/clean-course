(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  interface HtmlElementProps {
    id: string;
    type: HtmlType;
  }
  class HtmlElement {
    public id: string;
    public type: HtmlType;
    constructor({ id, type }: HtmlElementProps) {
      this.id = id;
      this.type = type;
    }
  }

  interface InputAttributesProps {
    value: string;
    placeholder: string;
  }
  class InputAttributes {
    public value: string;
    public placeholder: string;
    constructor({ value, placeholder }: InputAttributesProps) {
      this.value = value;
      this.placeholder = placeholder;
    }
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  interface InputElementProps {
    htmlElement: HtmlElementProps;
    inputAtributes: InputAttributesProps;
  }
  class InputElement {
    public htmlElement: HtmlElement;
    public inputAtributes: InputAttributes;
    public inputEvents: InputEvents;
    constructor({
      htmlElement: htmlElementProps,
      inputAtributes: inputAtributesProps,
    }: InputElementProps) {
      this.htmlElement = new HtmlElement(htmlElementProps);
      this.inputAtributes = new InputAttributes(inputAtributesProps);
      this.inputEvents = new InputEvents();
    }
  }
  //? Idea para la nueva clase InputElement

  const nameField = new InputElement({
    htmlElement: {
      id: "element_id",
      type: "input",
    },
    inputAtributes: {
      value: "Input_value",
      placeholder: "Escriba algo",
    },
  });

  console.log({ nameField });
})();
