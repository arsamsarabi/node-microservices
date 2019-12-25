module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "users",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      passwordHash: {
        allowNull: false,
        type: DataTypes.CHAR(64)
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      charset: "UTF8"
    }
  );
};

module.exports.down = queryInterface => queryInterface.dropTable("users");
