import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(({ request }, next) => {
  // const regex =
  //   /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera\ mini|avantgo|mobilesafari|docomo)/i;
  // console.log(regex.test(request.headers.get("user-agent")!));
  // MOBILE: (?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera\ mini|avantgo|mobilesafari|docomo)
  // Tablet: (?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))
  return next();
});
