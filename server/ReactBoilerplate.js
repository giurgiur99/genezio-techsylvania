export class ReactBoilerplate {
  constructor() {}

  async generateComponent(componentName) {
    const boilerplate = `
    import React from 'react';
    
    const ${componentName} = () => {
      return (
        <div className="p-4">
          <h1 className="text-xl">${componentName}</h1>
        </div>
      );
    }
    
    export default ${componentName};
    `;

    return { success: true, boilerplate };
  }
}
