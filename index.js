function getSafe(path_value) {
  try {
    if (typeof path_value !== "function") {
      throw new Error();
    }

    return path_value();
  } catch {
    return undefined;
  }
}

export default getSafe;
