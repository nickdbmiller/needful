class FavoritesController < ApplicationController
  before_action :set_favorite, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /favorites
  def index
    @favorites = Favorite.all

    render json: @favorites
  end

  # GET /users/:user_id/favorites
  def get_user_favorites
    @user = User.find(params[:user_id])
    render json: @user.favorites
  end
  
  # GET /favorites/1
  def show
    render json: @favorite
  end
  
  # POST /favorites
  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user = @current_user
    @favorite.product_id = params[:product_id]
    
    if @favorite.save
      render json: @favorite, status: :created
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /favorites/1
  def update
    if @favorite.update(favorite_params)
      render json: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  # DELETE /favorites/1
  def destroy
    @favorite.destroy
    render json: @favorite
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite
      @favorite = Favorite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorite_params
      params.require(:favorite).permit(:product_id, :user_id)
    end
end
