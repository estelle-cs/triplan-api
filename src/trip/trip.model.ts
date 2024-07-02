import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class Trip {
    @Field(type => Int)
    id: number;

    @Field()
    location: string;

    @Field()
    start_date: string;

    @Field()
    end_date: string;

}
