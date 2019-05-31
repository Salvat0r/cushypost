const specs = {
  REACT_APP_CUSHYPOST_API_CONFIG: "json",
  REACT_APP_ENV: "string"
};

const env = {};
for (var entry in specs) {
  const value = process.env[entry];
  if (value) {
    const validator = specs[entry];
    switch (validator) {
      case "json":
        env[entry] = JSON.parse(value);
        break;
      default:
        env[entry] = value;
        break;
    }
  } else {
    throw Error("Missing env var " + entry);
  }
}

env.isDev = ["development", "local"].includes(env.REACT_APP_ENV);
env.isProd = env.REACT_APP_ENV === "production";

console.debug = message => {
  if (env.isDev) console.log(message);
};

export default env;
