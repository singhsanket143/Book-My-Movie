function processSeatConfig(config: string) {
    if(config) {
        return JSON.parse(config.replaceAll("'", '"'));
    }
    return undefined;
}

export default processSeatConfig;