process.stdout.write('hello from spinner1.js... \rheyyy\n');
let time = 100
const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ']
for (let char of spinner) {
  setTimeout(() => {
    process.stdout.write(char)}, time);
  time += 200
}