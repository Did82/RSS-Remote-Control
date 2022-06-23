interface ICommand {
  title: string;
  arg: number | undefined;
  arg2: number | undefined;
}

const commandParser = (command: string) => {
  const commandArray = command.split(' ');
  const commandObject: ICommand = {
    title: commandArray[0],
    arg: parseInt(commandArray[1], 10),
    arg2: parseInt(commandArray[2], 10),
  };
  return commandObject;
};

export default commandParser;
