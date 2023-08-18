import {Settings} from "./module/settings.mjs";

Hooks.on('renderActorSheet5eCharacter', async (app, html, data) => {
    const exhaustionCounterDiv = html.find('div[class="counter flexrow exhaustion"]')

    const renderedHtml = await renderTemplate(
        `${Settings.templatesPath}/counterExhaustion.hbs`,
        {
            ...data,
            exhaustionLevels: Settings.exhaustionLevels
        }
    );

    exhaustionCounterDiv.html(renderedHtml)
});
