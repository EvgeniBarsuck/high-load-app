import { DataTypes, Model, ModelAttributes, Sequelize } from 'sequelize';

export interface IModelBase {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export type OmitBaseProps<T> = Omit<T, 'id' | 'created_at' | 'updated_at'>;

export function modelConstructor<T extends IModelBase>(
  name: string,
  sequelize: Sequelize,
  properties: ModelAttributes<Model<T, T>>,
) {
  return sequelize.define(
    name,
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        validate: {
          len: [36, 36],
        },
        defaultValue: DataTypes.UUIDV4,
      },
      ...properties,
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  );
}
