const signUp = (req, res, next) => {
  res.status(200).json({ message: "création du compte" });
};
const singIn = (req, res, next) => {
  res.status(200).json({ message: "se connecter" });
};
module.exports = {
    singIn,
    signUp
}