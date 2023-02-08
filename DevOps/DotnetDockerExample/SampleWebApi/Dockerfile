#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["SampleWebApi/SampleWebApi.csproj", "SampleWebApi/"]
RUN dotnet restore "SampleWebApi/SampleWebApi.csproj"
COPY . .
WORKDIR "/src/SampleWebApi"
RUN dotnet build "SampleWebApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SampleWebApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SampleWebApi.dll"]