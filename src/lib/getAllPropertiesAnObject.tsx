/* eslint-disable @typescript-eslint/no-explicit-any */
function getAllProperties(obj: any): string[] {
    const properties: string[] = [];

    for (const key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            const nestedProperties = getAllProperties(obj[key]);
            nestedProperties.forEach((nestedKey) => {
                properties.push(`${key}.${nestedKey}`);
            });
        } else {
            properties.push(key);
        }
    }

    return properties;
}


export {
    getAllProperties
}