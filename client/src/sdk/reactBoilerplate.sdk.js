/**
* This is an auto generated code. This code should not be modified since the file can be overwriten
* if new genezio commands are executed.
*/

import { Remote } from "./remote.js"

export class ReactBoilerplate {
  static remote = new Remote("https://5frbjur7mvu25hfbjc2keclwgy0wbwlh.lambda-url.eu-central-1.on.aws/ReactBoilerplate")

  static async generateComponent(componentName) {
    return ReactBoilerplate.remote.call("ReactBoilerplate.generateComponent", componentName)
  }

}
