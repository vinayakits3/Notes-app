import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

interface NoteAttributes {
  id?: number;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Note extends Model<NoteAttributes> implements NoteAttributes {
  public id!: number;
  public title!: string;
  public content!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'notes',
  }
);

export default Note;