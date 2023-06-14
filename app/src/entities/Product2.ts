import { Decimal } from "@prisma/client/runtime";
import { v4 } from "uuid";

export class Product2<Features = any, ChoiceOptions = any> {
  public _id: string;
  public basic_info?: {
    title: string;
    resum: string;
    type: string[];
    status?: 0 | 1;
    price1?: number;
    price2?: number;
    available?: 0 | 1;
    sales?: number;
    types: string[];
  }
  public shipping_information?: {
    height: number;
    length: number;
    weight: number;
    width: number;
  };
  public foreigners?: {
    parther_id: string;
    category_id: string;
    sub_category_id: string;
    sub_category2_id?: string;
    sub_category3_id?: string;
  };
  public features?: Features;
  public choice_options?: ChoiceOptions;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(props: Omit<Product2<Features, ChoiceOptions>, '_id' | 'createdAt' | 'updatedAt'>) {
    this.basic_info = props.basic_info;
    this.shipping_information = props.shipping_information;
    this.features = props.features;
    this.foreigners = props.foreigners;
    this.choice_options = props.choice_options;
  }
}
