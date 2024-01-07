module.exports = {
    apps: [
        {
            args: "start", // command we want to run when server starts (from package.json), in this case START which results with npm run start (first we need to run npm run build, then start)
            autorestart: true, // restart server if it crashes
            env_production: {
                APP_ENV: "prod", // environment we want to use
                PORT: 3000, // port we want to use
            },
            exec_mode: "cluster", // cluster or fork
            instances: 1,
            name: "ENTER PROJECT NAME", // name of the project
            script: "node_modules/next/dist/bin/next",
            watch: true, // watch for changes
        },
    ],
};
