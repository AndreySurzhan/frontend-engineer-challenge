export interface IApi {
    getTheme: () => Promise<any>;
}

export class Api implements IApi {
    public async getTheme(): Promise<any> {
        const themeApiUrl: string = process.env.REACT_APP_THEME_API_URL as string;

        if(!themeApiUrl) throw new Error('Theme API Url is not specified');

        try {
          const headersInit: HeadersInit = new Headers();

          headersInit.set('X-Organization-Id', '1');

          const response = await fetch(themeApiUrl, {
            method: 'GET',
            headers: headersInit
          });

          return await response.json()
        } catch (error) {
          console.log(error)
        }
    }
}