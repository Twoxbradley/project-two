module.exports = function(sequelize, DataTypes) {
  var Pokemon = sequelize.define("Pokemon", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type2: {
      type: DataTypes.STRING
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    atk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    spAtk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    spDef: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: "Pokemon"
  });
  return Pokemon;
};
