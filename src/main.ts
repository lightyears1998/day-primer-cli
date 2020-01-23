import blessed from "blessed";


// Setup screen.
const screen = blessed.screen({
    smartCSR: true,
    dockBorders: true,
    fullUnicode: true,
});
screen.title = "Day Primer CLI"


// Create a box.
const box = blessed.box({
    top: "center",
    left: "center",
    width: "50%",
    height: "50%",
    content: "Set a mono-space font to get better UI\n中文字符",
    border: {
        type: 'line'
    }
})
screen.append(box)


// Add keybindings to quit program.
screen.key(['escape', 'q', 'C-c'], (ch, key) => {
    console.log(ch, key);
    return process.exit(0)
});


// Render the screen.
screen.render();
