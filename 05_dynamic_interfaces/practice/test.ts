function getProperty<GenericType, Keys extends keyof GenericType>(
  obj: GenericType, 
  key: Keys
  ): GenericType[Keys] {
  return obj[key];
}
