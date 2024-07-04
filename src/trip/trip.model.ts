import { ObjectType, Field, Int } from "@nestjs/graphql";



/*
id: string
title: string
owner_id: string
friends: user_id[]
dates: {date: date, user_id: string}
destinations: Scenario 
transports: Scenario
hostings: Scenario 
activities: Scenario 
 */
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

    @Field()
    owner_id: number;

    @Field()
    transports: string;

    @Field()
    hostings: string;

    @Field()
    activities: string;

}
