import { hash } from "bcryptjs";

(async () => {
  console.log(await hash("senha123", 10));
})();
