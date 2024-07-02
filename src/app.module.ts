import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from './user/user.resolver';
import { AuthModule } from 'auth/auth.module';
import { TripModule } from 'trip/trip.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    AuthModule,
    TripModule,
  ],
  controllers: [AppController, ],
  providers: [
    AppService, 
    UserResolver,
  ],
})
export class AppModule {}
